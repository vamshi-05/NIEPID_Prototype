const { model } = require("mongoose")

const findPercent = (arr) => {
    var count = 0
    var ans = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].answer == "yes" || arr[i].answer == "Yes")
            ans++
        else //NA
            continue
        count++
    }
    return ((ans / count) * 100)
}
const findPercentForRecreational = (arr) => {
    console.log("---------------------------------")
    console.log(arr)
    var count_A = 0
    var count_B = 0
    var count_C = 0
    var count_D = 0
    var count_E = 0
    for (let i = 0;i< arr.length; i++) {
        if (arr[i].answer == "A") count_A++
        else if (arr[i].answer == "B") count_B++
        else if (arr[i].answer == "C") count_C++
        else if (arr[i].answer == "D") count_D++
        else if (arr[i].answer == "E") count_E++
    }
    var ans = "Z"
    var score = 0
    var val = Math.max(count_A, count_B, count_C, count_D, count_E)
    if (val === count_A)
        ans = "A"
    else if (val === count_B)
        ans = "B"
    else if (val === count_C)
        ans = "C"
    else if (val === count_D)
        ans = "D"
    else if (val === count_E)
        ans = "E"
    if(val !== 0)
        score = (val / arr.length) * 100
    console.log(score)
    return {
        mode: ans,
        precent: score
    }   
}

const deriveHistory = (std) => {
    var ans = {}
    ans.reports = std.yearReport
    for (let i = 0; i < ans.reports.length; i++) {
        for (let j = 0; j < ans.reports[i].termReport.length; j++) {
            ans.reports[i].termReport[j].report.personalPercent = findPercent(ans.reports[i].termReport[j].report.personalQA)
            ans.reports[i].termReport[j].report.socialPercent = findPercent(ans.reports[i].termReport[j].report.socialQA)
            ans.reports[i].termReport[j].report.academicPercent = findPercent(ans.reports[i].termReport[j].report.academicQA)
            ans.reports[i].termReport[j].report.occupationalPercent = findPercent(ans.reports[i].termReport[j].report.occupationalQA)
            ans.reports[i].termReport[j].report.recreationalPercent = findPercentForRecreational(ans.reports[i].termReport[j].report.recreationalQA)
            delete ans.reports[i].termReport[j].report.personalQA
            delete ans.reports[i].termReport[j].report.socialQA
            delete ans.reports[i].termReport[j].report.academicQA
            delete ans.reports[i].termReport[j].report.occupationalQA
            delete ans.reports[i].termReport[j].report.recreationalQA
        }
    }
    // console.log(ans.reports[0].termReport[0].report)
    return ans;
}

module.exports = deriveHistory