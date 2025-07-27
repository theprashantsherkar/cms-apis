export const getAllusers = async (req, res) => {
    try {
            res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: [] // Replace with actual user data when available
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}