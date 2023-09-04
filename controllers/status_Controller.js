
const Report = require('../models/reports')

// Function for filtering the reports (Concept of this function: Finding the reports w.r.t to status provided and returning the reports)

module.exports.filteredReports = async function(req,res){
    try {
        const reports = await Report.find({status:req.params.status})

        return res.status(200).json(
            {
                message: `List of Reports with status ${req.params.status}`,
                reports: reports
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
}