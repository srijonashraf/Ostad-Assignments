exports.create = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from User", data: "Created something" });
    } catch (error) {
      res.status(500).json({ status: "Error from User", error: error.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from User", data: "Retrieved something" });
    } catch (error) {
      res.status(500).json({ status: "Error from User", error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from User", data: "Deleted something" });
    } catch (error) {
      res.status(500).json({ status: "Error from User", error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from User", data: "Updated something" });
    } catch (error) {
      res.status(500).json({ status: "Error from User", error: error.message });
    }
  };
  