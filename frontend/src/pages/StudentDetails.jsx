import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import image from './th.jpeg'


const useStyles = createUseStyles({
    registrationForm: {
        display: 'flex',                    /*<tr>
                        <th className={classes.th}>History of Present Condition</th>
                        <td className={classes.td}>{studentData.info.historyOfPresentCondition[0].description}</td>
                    </tr>*/
            //       <h4 className={classes.title}>History of Present Condition</h4>
            //     <table className={classes.table}>
            //       <tbody>
            //         {studentData.info.historyOfPresentCondition.map((item, index) => (
            //             <tr key={index}>
            //                 <th className={classes.td}>Condition {index + 1}</th>
            //                 <td className={classes.td}>{item.description}</td>
            //             </tr>
            //         ))}
            //       </tbody>
            //    </table>

        flexDirection: 'column',
        width: '100%',
        maxWidth: '900px',
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
});
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
}
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
const Student = () => {
    const classes = useStyles();
    const [studentData,setStdentData] = useState({
        "info": {
            "regNo": "",
            "regDate": {
                "$date": "0000-00-00T00:00:00.000Z"
            },
            "dob": {
                "$date": "0000-00-00T00:00:00.000Z"
            },
            "name": "",
            "sex": "",
            "information": "",
            "education": "",
            "refBy": "",
            "occupation": "",
            "aadharNo": 0,
            "paymentType": "",
            "mobileNo": "",
            "purposeVisit": "",
            "treatmentUnderGone": "",
            "typeOfTreatment": "",
            "therapeutic": "",
            "historyOfPresentCondition": [
                {
                    "description": "",
                }
            ]
        },
       "presentingComplaints": {
            "hasDysmorphicFeatures": "",
            "smallSizedHead": "",
            "ableToWalkAndRun": "",
            "noAgeAppropriateComprehensionAndSpeechDevelopment": "",
            "emotionallyAttachedToParentsAndRecognisesAllFamilyMembers": "",
            "hasAdequateEyeContactAndSocialSmile": "",
            "eatsSelf": "",
            "hasDysmorphicFeaturesDuration": "",
            "smallSizedHeadDuration": "",
            "ableToWalkAndRunDuration": "",
            "noAgeAppropriateComprehensionAndSpeechDevelopmentDuration": "",
            "emotionallyAttachedToParentsAndRecognisesAllFamilyMembersDuration": "",
            "hasAdequateEyeContactAndSocialSmileDuration": "",
            "eatsSelfDuration": "",
            "_id": {
                "$oid": "668b0828780f13fb12267c3d"
            }
        },
        "history": {
            "chromosomalAberrations": "",
            "rhIncompatibility": "",
            "geneticAberrations": "",
            "consanguinity": "",
            "threatenedAbortion": "",
            "potentiallyHarmfulMedication": "",
            "antenatalCheckUps": "",
            "significantAccidentsInjury": "",
            "infections1": "",
            "pregnancy": "",
            "attemptedAbortion": "",
            "nutrition": "",
            "psychologicalTrauma": "",
            "amnioticFluid": "",
            "irradiation": "",
            "nicotine": "",
            "alcohol": "",
            "ageAtConception": "",
            "hypertension": "",
            "diabetes": "",
            "jaundice1": "",
            "fetalMovement": "",
            "bleedingDuringLatePregnancy": "",
            "labourDuration": "",
            "prolapsedCord": "",
            "cordAroundNeck": "",
            "multiplePregnancies": "",
            "feedingProblem": "",
            "colorOfTheBaby": "",
            "significantInjury": "",
            "deliveryPlace": "",
            "term": "",
            "deliveryType": "",
            "abnormalPresentation": "",
            "respiratoryDistress": "",
            "jaundice2": "",
            "deliveryConductedBy": "",
            "labourInduction": "",
            "birthCry": "",
            "separationFromMotherImmediatelyAfterDelivery": "",
            "jaundice3": "",
            "thyroidDysfunctions": "",
            "nutritionalDisorders": "",
            "infections3": "",
            "significantHeadInjury": "",
            },
        "familyHistory": {
            "typeOfFamily": "",
            "mentalRetardation": "",
            "consanguinity": "",
            "seizuresOrConvulsions": "",
            "hearingProblems": "",
            "speechProblems": "",
            "mentalIllness": "",
            "autismOrSpectrumDisorder": "",
            "visualProblem": "",
            "locomotorProblem": "",
            "anyFamilyHistoryOfDelayDisabilityDisorderDiseaseDeficiency": "",
            "learningDisabilities": "",
            "familyInvolvementIn": "",
            "positiveIssuesWithNeighborhoodBecauseOfTheClient": "",
            "personalNeedsOfTheClient": "",
            "visitsToTheFamilyByOthers": "",
            "familysVisitsOutside": "",
            "playAndLeisureTimeActivities": "",
            "educationalActivities": "",
            "supportOfExtendedFamily": "",
            "negativeIssuesWithNeighborhoodBecauseOfTheClient": "",
            "discontinuedSchool": "",
            "educationalHistory": "",
            "teacherReport": "",
            "overallPerformance": "",
            "typeOfSchooling": "",
            "ifYesReasonForDiscontinuingSchooling": "",
            "involvementInPlay": "",
            "observesOthersPlaying": "",
            "playBehaviour": "",
            "periodicity": "",
            "attainedMenarche": "",
            "menstrualHistory": "",
            "anySignificantDetails": "",
            "vocationalTraining": "",
            "occupationalHistory": "",
            "employment": ""
        },
        "developmentHistory": {
            "headControl3To5Months": "",
            "rolling3To5Months": "",
            "independentSitting6To8Months": "",
            "crawling6To8Months": "",
            "walking11To14Months": "",
            "bilateralHoldingOfToys3To6Months": "",
            "holdingSmallItemsWithFingerAndThumb6To9Months": "",
            "scribblingWithACrayon12To18Months": "",
            "babbling4To8Months": "",
            "firstWords11To12Months": "",
            "twoWordsPhrases18To24Months": "",
            "sentences2To3Months": "",
            "smilesAtOthers3To4Months": "",
            "respondsToName7To12Months": "",
            "feedsSelf3To4Years": "",
            "cognitive": "",
            "motor": "",
            "speechAndLanguage": "",
            "social": "",
            "significantMedicalIllness": "",
            "significantSurgicalIllness": "",
            "anyNegativeReactions": ""
        },
    })
    const regNo = localStorage.getItem('regNo')
    console.log(regNo)
    useEffect(()=>{
        async function fetchStudentData(){
            try {
                console.log("Hello")
                const res = await axios.get("https://niepid-final.onrender.com/student/viewDetail",{
                    headers: {
                        regNo: regNo,
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                      }
                    }, { withCredentials:  true }
                )
                console.log(res.data)
                const details = res.data
                // console.log(details.std)
                setStdentData(details)
                console.log("data fetched")
            } catch (err) {
                console.error(err)
            }
        };
        fetchStudentData();
    }
    ,[])    //src={image}
    // const navigate = useNavigate()
    // const role = localStorage.getItem("role")
    // const Header = () => (
    //     <header style={useStyles.header}>
    //         <div style={useStyles.logo}>
    //             <img  alt="Logo" style={useStyles.logoImage} /> 
    //             <span style={useStyles.logoLabel}>NIEPID</span>
    //         </div>
    //         <nav style={useStyles.navLinks}>
    //             <button onClick={() => {
    //                 if (role === "principle")
    //                     navigate("/principle/viewStudents")
    //                 else if (role === "admin")
    //                     navigate("/admin/viewstudents")
    //                 else if (role === "student")
    //                     navigate("/student")
    //             }} style={useStyles.backButton}>
    //                 Back
    //             </button>
    //         </nav>
    //     </header>
    // );
    const navigate = useNavigate()
    const role = localStorage.getItem("role")
    const Header = () => {
        return (
            <>
                <header style={styles.header}>
                    <div style={styles.logo}>
                        <img src={image} alt="Logo" style={styles.logoImage} />
                        <span style={styles.logoLabel}>NIEPID</span>
                    </div>
                    <nav style={styles.navLinks}>
                        <button onClick={() => {
                            if (role === "principle")
                                navigate("/principle/viewStudents")
                            else if (role === "admin")
                                navigate("/admin/viewstudents")
                            else if (role === "student")
                                navigate("/student")
                        }} style={styles.backButton}>
                            Back
                        </button>
                    </nav>
                </header>
            </>
        );
    }


    return (
        <>
            <Header/>
            <form className={classes.registrationForm}>
                <div className={classes.title}>Student Details</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Registration Number</th>
                            <td className={classes.td}>{studentData.info.regNo}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Registration Date</th>
                            <td className={classes.td}>{new Date(studentData.info.regDate.$date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Date of Birth</th>
                            <td className={classes.td}>{new Date(studentData.info.dob.$date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Name</th>
                            <td className={classes.td}>{studentData.info.name}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Sex</th>
                            <td className={classes.td}>{studentData.info.sex}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Information</th>
                            <td className={classes.td}>{studentData.info.information}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Education</th>
                            <td className={classes.td}>{studentData.info.education}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Referred By</th>
                            <td className={classes.td}>{studentData.info.refBy}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Occupation</th>
                            <td className={classes.td}>{studentData.info.occupation}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Aadhar Number</th>
                            <td className={classes.td}>{studentData.info.aadharNo}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Payment Type</th>
                            <td className={classes.td}>{studentData.info.paymentType}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Mobile Number</th>
                            <td className={classes.td}>{studentData.info.mobileNo}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Purpose of Visit</th>
                            <td className={classes.td}>{studentData.info.purposeVisit}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Treatment Undergone</th>
                            <td className={classes.td}>{studentData.info.treatmentUnderGone}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Type of Treatment</th>
                            <td className={classes.td}>{studentData.info.typeOfTreatment}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Therapeutic</th>
                            <td className={classes.td}>{studentData.info.therapeutic}</td>
                        </tr>
                        
                    </tbody>
                </table>


                

                <div className={classes.title}>Presenting Complaints</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Has Dysmorphic Features</th>
                            <td className={classes.td}>{studentData.presentingComplaints.hasDysmorphicFeatures}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Small Sized Head</th>
                            <td className={classes.td}>{studentData.presentingComplaints.smallSizedHead}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Able to Walk and Run</th>
                            <td className={classes.td}>{studentData.presentingComplaints.ableToWalkAndRun}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>No Age-Appropriate Comprehension and Speech Development</th>
                            <td className={classes.td}>{studentData.presentingComplaints.noAgeAppropriateComprehensionAndSpeechDevelopment}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Emotionally Attached to Parents and Recognises All Family Members</th>
                            <td className={classes.td}>{studentData.presentingComplaints.emotionallyAttachedToParentsAndRecognisesAllFamilyMembers}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Has Adequate Eye Contact and Social Smile</th>
                            <td className={classes.td}>{studentData.presentingComplaints.hasAdequateEyeContactAndSocialSmile}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Eats Self</th>
                            <td className={classes.td}>{studentData.presentingComplaints.eatsSelf}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Has Dysmorphic Features Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.hasDysmorphicFeaturesDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Small Sized Head Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.smallSizedHeadDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Able to Walk and Run Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.ableToWalkAndRunDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>No Age-Appropriate Comprehension and Speech Development Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.noAgeAppropriateComprehensionAndSpeechDevelopmentDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Emotionally Attached to Parents and Recognises All Family Members Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.emotionallyAttachedToParentsAndRecognisesAllFamilyMembersDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Has Adequate Eye Contact and Social Smile Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.hasAdequateEyeContactAndSocialSmileDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Eats Self Duration</th>
                            <td className={classes.td}>{studentData.presentingComplaints.eatsSelfDuration}</td>
                        </tr>
                    </tbody>
                </table>

                <div className={classes.title}>History</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Chromosomal Aberrations</th>
                            <td className={classes.td}>{studentData.history.chromosomalAberrations}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Rh Incompatibility</th>
                            <td className={classes.td}>{studentData.history.rhIncompatibility}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Genetic Aberrations</th>
                            <td className={classes.td}>{studentData.history.geneticAberrations}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Consanguinity</th>
                            <td className={classes.td}>{studentData.history.consanguinity}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Threatened Abortion</th>
                            <td className={classes.td}>{studentData.history.threatenedAbortion}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Potentially Harmful Medication</th>
                            <td className={classes.td}>{studentData.history.potentiallyHarmfulMedication}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Antenatal Check-Ups</th>
                            <td className={classes.td}>{studentData.history.antenatalCheckUps}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Significant Accidents/Injury</th>
                            <td className={classes.td}>{studentData.history.significantAccidentsInjury}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Infections</th>
                            <td className={classes.td}>{studentData.history.infections1}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Pregnancy</th>
                            <td className={classes.td}>{studentData.history.pregnancy}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Attempted Abortion</th>
                            <td className={classes.td}>{studentData.history.attemptedAbortion}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Nutrition</th>
                            <td className={classes.td}>{studentData.history.nutrition}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Psychological Trauma</th>
                            <td className={classes.td}>{studentData.history.psychologicalTrauma}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Amniotic Fluid</th>
                            <td className={classes.td}>{studentData.history.amnioticFluid}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Irradiation</th>
                            <td className={classes.td}>{studentData.history.irradiation}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Nicotine</th>
                            <td className={classes.td}>{studentData.history.nicotine}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Alcohol</th>
                            <td className={classes.td}>{studentData.history.alcohol}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Age at Conception</th>
                            <td className={classes.td}>{studentData.history.ageAtConception}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Hypertension</th>
                            <td className={classes.td}>{studentData.history.hypertension}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Diabetes</th>
                            <td className={classes.td}>{studentData.history.diabetes}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Jaundice</th>
                            <td className={classes.td}>{studentData.history.jaundice1}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Fetal Movement</th>
                            <td className={classes.td}>{studentData.history.fetalMovement}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Bleeding During Late Pregnancy</th>
                            <td className={classes.td}>{studentData.history.bleedingDuringLatePregnancy}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Labour Duration</th>
                            <td className={classes.td}>{studentData.history.labourDuration}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Prolapsed Cord</th>
                            <td className={classes.td}>{studentData.history.prolapsedCord}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Cord Around Neck</th>
                            <td className={classes.td}>{studentData.history.cordAroundNeck}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Multiple Pregnancies</th>
                            <td className={classes.td}>{studentData.history.multiplePregnancies}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Feeding Problem</th>
                            <td className={classes.td}>{studentData.history.feedingProblem}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Color of the Baby</th>
                            <td className={classes.td}>{studentData.history.colorOfTheBaby}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Significant Injury</th>
                            <td className={classes.td}>{studentData.history.significantInjury}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Delivery Place</th>
                            <td className={classes.td}>{studentData.history.deliveryPlace}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Term</th>
                            <td className={classes.td}>{studentData.history.term}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Delivery Type</th>
                            <td className={classes.td}>{studentData.history.deliveryType}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Abnormal Presentation</th>
                            <td className={classes.td}>{studentData.history.abnormalPresentation}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Respiratory Distress</th>
                            <td className={classes.td}>{studentData.history.respiratoryDistress}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Jaundice</th>
                            <td className={classes.td}>{studentData.history.jaundice2}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Delivery Conducted By</th>
                            <td className={classes.td}>{studentData.history.deliveryConductedBy}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Labour Induction</th>
                            <td className={classes.td}>{studentData.history.labourInduction}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Birth Cry</th>
                            <td className={classes.td}>{studentData.history.birthCry}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Separation From Mother Immediately After Delivery</th>
                            <td className={classes.td}>{studentData.history.separationFromMotherImmediatelyAfterDelivery}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Jaundice</th>
                            <td className={classes.td}>{studentData.history.jaundice3}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Thyroid Dysfunctions</th>
                            <td className={classes.td}>{studentData.history.thyroidDysfunctions}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Nutritional Disorders</th>
                            <td className={classes.td}>{studentData.history.nutritionalDisorders}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Infections</th>
                            <td className={classes.td}>{studentData.history.infections3}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Significant Head Injury</th>
                            <td className={classes.td}>{studentData.history.significantHeadInjury}</td>
                        </tr>
                    </tbody>
                </table>

                <div className={classes.title}>Family History</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Type of Family</th>
                            <td className={classes.td}>{studentData.familyHistory.typeOfFamily}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Mental Retardation</th>
                            <td className={classes.td}>{studentData.familyHistory.mentalRetardation}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Consanguinity</th>
                            <td className={classes.td}>{studentData.familyHistory.consanguinity}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Seizures or Convulsions</th>
                            <td className={classes.td}>{studentData.familyHistory.seizuresOrConvulsions}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Hearing Problems</th>
                            <td className={classes.td}>{studentData.familyHistory.hearingProblems}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Speech Problems</th>
                            <td className={classes.td}>{studentData.familyHistory.speechProblems}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Mental Illness</th>
                            <td className={classes.td}>{studentData.familyHistory.mentalIllness}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Autism or Spectrum Disorder</th>
                            <td className={classes.td}>{studentData.familyHistory.autismOrSpectrumDisorder}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Visual Problem</th>
                            <td className={classes.td}>{studentData.familyHistory.visualProblem}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Locomotor Problem</th>
                            <td className={classes.td}>{studentData.familyHistory.locomotorProblem}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Any Family History of Delay, Disability, Disorder, Disease, Deficiency</th>
                            <td className={classes.td}>{studentData.familyHistory.anyFamilyHistoryOfDelayDisabilityDisorderDiseaseDeficiency}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Learning Disabilities</th>
                            <td className={classes.td}>{studentData.familyHistory.learningDisabilities}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Family Involvement In</th>
                            <td className={classes.td}>{studentData.familyHistory.familyInvolvementIn}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Positive Issues with Neighborhood Because of the Client</th>
                            <td className={classes.td}>{studentData.familyHistory.positiveIssuesWithNeighborhoodBecauseOfTheClient}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Personal Needs of the Client</th>
                            <td className={classes.td}>{studentData.familyHistory.personalNeedsOfTheClient}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Visits to the Family by Others</th>
                            <td className={classes.td}>{studentData.familyHistory.visitsToTheFamilyByOthers}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Family's Visits Outside</th>
                            <td className={classes.td}>{studentData.familyHistory.familysVisitsOutside}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Play and Leisure Time Activities</th>
                            <td className={classes.td}>{studentData.familyHistory.playAndLeisureTimeActivities}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Educational Activities</th>
                            <td className={classes.td}>{studentData.familyHistory.educationalActivities}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Support of Extended Family</th>
                            <td className={classes.td}>{studentData.familyHistory.supportOfExtendedFamily}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Negative Issues with Neighborhood Because of the Client</th>
                            <td className={classes.td}>{studentData.familyHistory.negativeIssuesWithNeighborhoodBecauseOfTheClient}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Discontinued School</th>
                            <td className={classes.td}>{studentData.familyHistory.discontinuedSchool}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Educational History</th>
                            <td className={classes.td}>{studentData.familyHistory.educationalHistory}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Teacher Report</th>
                            <td className={classes.td}>{studentData.familyHistory.teacherReport}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Overall Performance</th>
                            <td className={classes.td}>{studentData.familyHistory.overallPerformance}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Type of Schooling</th>
                            <td className={classes.td}>{studentData.familyHistory.typeOfSchooling}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>If Yes, Reason for Discontinuing Schooling</th>
                            <td className={classes.td}>{studentData.familyHistory.ifYesReasonForDiscontinuingSchooling}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Involvement in Play</th>
                            <td className={classes.td}>{studentData.familyHistory.involvementInPlay}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Observes Others Playing</th>
                            <td className={classes.td}>{studentData.familyHistory.observesOthersPlaying}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Play Behaviour</th>
                            <td className={classes.td}>{studentData.familyHistory.playBehaviour}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Periodicity</th>
                            <td className={classes.td}>{studentData.familyHistory.periodicity}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Attained Menarche</th>
                            <td className={classes.td}>{studentData.familyHistory.attainedMenarche}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Menstrual History</th>
                            <td className={classes.td}>{studentData.familyHistory.menstrualHistory}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Any Significant Details</th>
                            <td className={classes.td}>{studentData.familyHistory.anySignificantDetails}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Vocational Training</th>
                            <td className={classes.td}>{studentData.familyHistory.vocationalTraining}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Occupational History</th>
                            <td className={classes.td}>{studentData.familyHistory.occupationalHistory}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Employment</th>
                            <td className={classes.td}>{studentData.familyHistory.employment}</td>
                        </tr>
                    </tbody>
                </table>

                <div className={classes.title}>Development History</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Head Control (3 to 5 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.headControl3To5Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Rolling (3 to 5 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.rolling3To5Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Independent Sitting (6 to 8 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.independentSitting6To8Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Crawling (6 to 8 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.crawling6To8Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Walking (11 to 14 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.walking11To14Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Bilateral Holding of Toys (3 to 6 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.bilateralHoldingOfToys3To6Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Holding Small Items with Finger and Thumb (6 to 9 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.holdingSmallItemsWithFingerAndThumb6To9Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Scribbling with a Crayon (12 to 18 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.scribblingWithACrayon12To18Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Babbling (4 to 8 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.babbling4To8Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>First Words (11 to 12 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.firstWords11To12Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Two-Word Phrases (18 to 24 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.twoWordsPhrases18To24Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Sentences (2 to 3 Years)</th>
                            <td className={classes.td}>{studentData.developmentHistory.sentences2To3Years}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Smiles at Others (3 to 4 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.smilesAtOthers3To4Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Responds to Name (7 to 12 Months)</th>
                            <td className={classes.td}>{studentData.developmentHistory.respondsToName7To12Months}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Feeds Self (3 to 4 Years)</th>
                            <td className={classes.td}>{studentData.developmentHistory.feedsSelf3To4Years}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Cognitive</th>
                            <td className={classes.td}>{studentData.developmentHistory.cognitive}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Motor</th>
                            <td className={classes.td}>{studentData.developmentHistory.motor}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Speech and Language</th>
                            <td className={classes.td}>{studentData.developmentHistory.speechAndLanguage}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Social</th>
                            <td className={classes.td}>{studentData.developmentHistory.social}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Significant Medical Illness</th>
                            <td className={classes.td}>{studentData.developmentHistory.significantMedicalIllness}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Significant Surgical Illness</th>
                            <td className={classes.td}>{studentData.developmentHistory.significantSurgicalIllness}</td>
                        </tr>
                        <tr>
                            <th className={classes.th}>Any Negative Reactions</th>
                            <td className={classes.td}>{studentData.developmentHistory.anyNegativeReactions}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <footer style={footerStyles.footer}>
                <p style={footerStyles.text}>© 2024 NIEPID. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Student;