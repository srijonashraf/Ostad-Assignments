exports.create = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Post", data: "Created something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Post", error: error.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Post", data: "Retrieved something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Post", error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Post", data: "Deleted something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Post", error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Post", data: "Updated something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Post", error: error.message });
    }
  };
  