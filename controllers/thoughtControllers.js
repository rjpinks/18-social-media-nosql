const { Thought } = require("../models");

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
        res.status(500).json(err);
      }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.body._id })
            .select('-__v');
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(thought);
        } catch {
            res.status(500).json(err)
        }
    },
      // create a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Update a thought
    async updateThought(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.body._id },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.body._id });
        
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
        
            res.json({ message: 'Thought deleted!' });
            } catch (err) {
              res.status(500).json(err);
            }
        },
    //create a reaction
    async createReaction (req, res) {
      try {
        const reaction = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!reaction) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
  
        res.json(reaction);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    //Delete a response
    async deleteReaction (req, res) {
      try {
        const reaction = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { responseId: req.body.responseId } } },
          { runValidators: true, new: true }
        )
  
        if (!reaction) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
  
        res.json(reaction);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };