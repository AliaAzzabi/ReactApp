const mongoose = require("mongoose");
const User = require("../user_auth/userschema");

const AdminSchema = mongoose.Schema({
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image"
    },
  
});

AdminSchema.post('findOneAndDelete', async function(Admin) {
    try {
        const userId = Admin.user;

        if (userId) {
            await User.findByIdAndDelete(userId);
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur associé:", error);
    }
});

module.exports = mongoose.model("Admin", AdminSchema);
