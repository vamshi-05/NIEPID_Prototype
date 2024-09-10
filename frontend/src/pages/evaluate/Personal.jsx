import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import image from './th.jpeg'
import { useNavigate } from 'react-router-dom';
// import flattenStudentData from '../helpers/flattenStudentData';

const useStyles = createUseStyles({
    registrationForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1100px',
        margin: 'auto',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        },
        '@media (min-width: 600px)': {
            width: '100%',
        },
        '@media (min-width: 900px)': {
            width: '100%',
        },
        '@media (min-width: 1200px)': {
            width: '100%',
        },
    },
    title: {
        fontSize: '40px',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#444',
        background: '-webkit-linear-gradient(left, #007BFF, #0056b3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    label: {
        marginBottom: '25px',
        fontSize: '20px',
        fontWeight: '500',
        color: '#444',
    },
    textInput: {
        padding: '12px',
        marginTop: '5px',
        marginBottom: '20px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '15px',
        color: '#333',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        '&:focus': {
            borderColor: '#007BFF',
            outline: 'none',
            boxShadow: '0 0 8px rgba(0, 123, 255, 0.4)',
        },
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        '&:hover': {
            backgroundColor: '#0056b3',
            transform: 'translateY(-3px)',
        },
        '&:active': {
            transform: 'translateY(1px)',
        },
        '&:disabled': {
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    tableContainer: {
        marginTop: '40px',
    },
    tableTitle: {
        fontSize: '30px',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
        background: '-webkit-linear-gradient(left, #28a745, #218838)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    table: {
        width: '100%',
        marginTop: '10px',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #ddd',
        padding: '14px',
        textAlign: 'left',
        backgroundColor: '#f8f9fa',
        fontWeight: '600',
        fontSize: '20px',
        color: '#333',
    },
    td: {
        border: '1px solid #ddd',
        padding: '14px',
        fontSize: '20px',
        color: '#555',
        backgroundColor: '#fff',
    },
    label: {
        alignSelf: "center",
        justifySelf: 'flex-end'
    },
    buttonContainer1: {
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: '20px',
        // marginTop: '20px',
    },
    textArea: {
        padding: '12px',
        marginTop: '5px',
        marginBottom: '20px',
        width: '100%',
        height: '100px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '15px',
        color: '#333',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        resize: 'vertical',
        '&:focus': {
            borderColor: '#007BFF',
            outline: 'none',
            boxShadow: '0 0 8px rgba(0, 123, 255, 0.4)',
        },
    },
});

const Personal = () => {
    const classes = useStyles();
    const location = useLocation();
    const { pathname } = location;
    let username
    const [isEditing, setIsEditing] = useState(true);
    const [answer, setAnswer] = useState({});
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");
    const [percent, setPercent] = useState("");
    const [comments, setComments] = useState("")
    const [oldComments, setOldComments] = useState("")

    const section = localStorage.getItem("section")
    const term = localStorage.getItem("term")
    const year = localStorage.getItem("year")
    const currTerm = localStorage.getItem("currTerm")
    const currYear = localStorage.getItem("currYear")
    const currSection = localStorage.getItem("currSection")
    const id = localStorage.getItem("studentId")
    // const term = "I"
    // const year = "2023"

    const navigate = useNavigate()
    const Header = () => (
        <header style={styles.header}>
            <div style={styles.logo}>
                <img src={image} alt="Logo" style={styles.logoImage} />
                <span style={styles.logoLabel}>NIEPID</span>
            </div>
            <button onClick={() => navigate('/teacher/eval')} style={styles.backButton}>Back</button>
        </header>
    )

    useEffect(async () => {
        // console.log(term, currTerm)
        // console.log(year, currYear)
        // console.log(section, currSection)
        // console.log(id)
        const data = await axios.get("https://niepid-yrdn.onrender.com/teacher/evaluate/questions", {
            headers: {
                id: id,
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res)
                username = res.data.data.name
                var i = 0, j = 0, k = 0;
                res.data.data.section.map((s, index) => {
                    if (s.sec === section)
                        k = index
                })
                res.data.data.section[k].yearReport.map((y, index) => {
                    if (y.year === year)
                        i = index
                })
                res.data.data.section[k].yearReport[i].termReport.map((t, index) => {
                    if (t.term === term)
                        j = index
                })
                const personalQuestions = res.data.data.section[k].yearReport[i].termReport[j].report.personalQA
                setQuestions(personalQuestions)
                const initialanswer = {}
                personalQuestions.forEach((question, index) => {
                    initialanswer[`s${index + 1}`] = question.answer;
                });
                setAnswer(initialanswer);
                if (res.data.data.section[k].yearReport[i].termReport[j].comment.personalComment.trim() !== "")
                    setOldComments(res.data.data.section[k].yearReport[i].termReport[j].comment.personalComment)
                else
                    setOldComments("Enter your comments")
                // console.log(res.data.data.section[k].yearReport[i].termReport[j].comment.personalComment)
            })
            .catch()
    }, [username]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswer({
            ...answer,
            [name]: value
        });
    };

    const handleNewQuestionChange = (event) => {
        setNewQuestion(event.target.value);
    };

    const handleNewAnswerChange = (event) => {
        setNewAnswer(event.target.value);
    };

    const handleAddRow = (event) => {
        event.preventDefault();
        if (!newQuestion.trim() || !newAnswer.trim()) {
            return;
        }

        const newEntry = { question: newQuestion, answer: newAnswer };
        const updatedQuestions = [...questions, newEntry];
        setQuestions(updatedQuestions);
        setAnswer({
            ...answer,
            [`s${updatedQuestions.length}`]: newAnswer
        });
        setNewQuestion("");
        setNewAnswer("");
        // console.log(answer)
    };

    const handleEvaluate = async (event) => {
        event.preventDefault();
        const submissionData = {
            username: username,
            questions: questions.map((question, index) => ({
                question: question.question,
                answer: answer[`s${index + 1}`] || question.answer
            }))
        };
        // console.log('Submitting data:', submissionData);
        const id = localStorage.getItem("studentId")
        await axios.post("https://niepid-yrdn.onrender.com/teacher/eval/form", {
            type: "personalQA",
            id: id,
            section: section,
            year: year,
            term: term,
            data: submissionData,
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(res => {
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err.response)
            })

        axios.get("https://niepid-yrdn.onrender.com/teacher/evaluate", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                section: section,
                year: year,
                term: term,
                id: id,
                type: "personalQA"
            }
        })
            .then((res) => {
                console.log(res.data)
                const per = res.data.result
                setPercent(per)
            })
            .catch((err) => {
                console.log(err)
            })

        const commentsElements = document.getElementsByName("comments");
        commentsElements.forEach((element) => {
            element.disabled = false;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://niepid-yrdn.onrender.com/teacher/termTypeComment", {
            section: section,
            year: year,
            term: term,
            id: id,
            type: "personalQA",
            comments: comments
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("checklist submitted")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const handleCommentsChange = (event) => {
        console.log(oldComments)
        setComments(event.target.value);
        if (event.target.value)
            document.getElementById("submit").disabled = false
        else
            document.getElementById("submit").disabled = true
    };

    return (
        <>
            <Header />
            <form className={classes.registrationForm} onSubmit={handleSubmit}>
                <div className={classes.title}>Functional Assessment Checklist For Programming</div>
                <div className={classes.title}>Personal</div>
                <table className={classes.table}>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={index}>
                                <td className={classes.td}>{index + 1}</td>
                                <td className={classes.td}>{question.question}</td>
                                <td className={classes.td}>
                                    <select
                                        name={`s${index + 1}`}
                                        value={answer[`s${index + 1}`]}
                                        onChange={handleChange}
                                        //disabled={(term !== currTerm || year !== currYear || section !== currSection)}
                                        className={classes.textInput}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="NA">NA</option>
                                        <option value="NE">NE</option>
                                        <option value="C-P1">C-P1</option>
                                        <option value="C-P2">C-P2</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className={classes.td}>{questions.length + 1}</td>
                            <td className={classes.td}>
                                <input
                                    type="text"
                                    name="newQuestion"
                                    value={newQuestion}
                                    onChange={handleNewQuestionChange}
                                    className={classes.textInput}
                                    placeholder="Enter new question"
                                />
                            </td>
                            <td className={classes.td}>
                                <select
                                    name="newAnswer"
                                    value={newAnswer}
                                    onChange={handleNewAnswerChange}
                                    className={classes.textInput}
                                >
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="NA">NA</option>
                                    <option value="NE">NE</option>
                                    <option value="C-P1">C-P1</option>
                                    <option value="C-P2">C-P2</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={classes.buttonContainer}>
                    <button
                        className={classes.button}
                        onClick={handleAddRow}
                        disabled={!newQuestion.trim() || !newAnswer.trim()}
                    >
                        Add Question
                    </button>
                    <div className={classes.buttonContainer1}>
                        <label className={classes.label}>{"Percentage : " + percent + "%"}</label>
                        <button className={classes.button} onClick={handleEvaluate}>Evaluate</button>
                    </div>
                </div>
                <textarea
                    name="comments"
                    value={comments}
                    onChange={handleCommentsChange}
                    disabled={true}
                    className={classes.textArea}
                    placeholder={oldComments}
                />
                <button id="submit" className={classes.button} disabled={true} type="submit">Submit</button>
            </form>
            <footer style={footerStyles.footer}>
                <p style={footerStyles.text}>© 2024 NIEPID. All rights reserved.</p>
            </footer>
        </>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#007bff',
        color: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '1rem'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        width: '40px',
        height: '40px',
        marginRight: '0.5rem',
    },
    logoLabel: {
        fontSize: '1.5rem',
    },
    backButton: {
        padding: "0.8rem 1.5rem",
        fontSize: "1rem",
        backgroundColor: "#000000",
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.3s",
    },
};

const footerStyles = {
    footer: {
        backgroundColor: '#007bff',
        padding: '1rem',
        textAlign: 'center',
        color: '#ffffff',
        position: 'relative',
        bottom: 0,
        width: '100%',
    },
    text: {
        margin: 0,
    }
};

export default Personal;
