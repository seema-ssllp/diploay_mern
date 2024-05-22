import User from "../models/usermodel.js";
// usercreate 
// localhost:7000/api/create path in create 
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        const saveData = await userData.save();
        res.status(200).json(saveData);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}
// all data fetch 2
export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "User data is not found" });
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// one single pertion data
// localhost:7000/api/getOne/66473316b377fc1e3921f916 path in post man check
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: 'User not found' })
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// data updat button 

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(401).json({ msg: "user note found" });
        }
        const updateDate = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "user has updated succesfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// delet api user
export const deleteUser = async (req, res) => {

    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "user is not exite" })
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "user deleted sucessfully" })

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

