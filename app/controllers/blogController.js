
export const createBlog = async (req, res) => {
    try {
        return res.json({ message: "Blog created successfully 😊" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating blog" });
    }
};

export const readBlog = async (req, res) => {
    try {
        return res.json({ message: "Blog read successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error reading blog" });
    }
};

export const updateBlog = async (req, res) => {
    try {
        return res.json({ message: "Blog updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error updating blog" });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        return res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting blog" });
    }
};