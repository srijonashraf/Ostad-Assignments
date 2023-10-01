exports.create = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Sub Admin", data: "Created something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Sub Admin", error: error.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Sub Admin", data: "Retrieved something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Sub Admin", error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Sub Admin", data: "Deleted something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Sub Admin", error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      res.status(200).json({ status: "Success from Sub Admin", data: "Updated something" });
    } catch (error) {
      res.status(500).json({ status: "Error from Sub Admin", error: error.message });
    }
  };
  