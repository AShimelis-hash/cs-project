const { mongoose } = require(".");

module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            {
                timestamps: true

            }
        )
    );
    return Tutorial;
};