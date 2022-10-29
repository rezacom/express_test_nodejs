import * as model from "../models";

function getFriends (req: any, res: any) {
    res.json(model.friends)
}

function getFriend (req: any, res: any) {
    const friendId = Number(req.params.id)
    const friend = model.friends[friendId];
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({ errorMassage: "user dose not exist." })

    }
}

function postFriend (req: any, res: any) {
    if (!req.body.name) {
        return res.status(400).json({ 
            errorMassage: "missing friend name" 
        })
    }

    const newFriend = {
        name: req.body.name,
        id: model.friends.length
    }
    model.friends.push(newFriend);
    res.json(newFriend)
}

export {
    getFriends,
    getFriend,
    postFriend
}