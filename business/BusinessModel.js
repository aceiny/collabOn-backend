const {Schema, model} = require('mongoose');
const businessSchema = new Schema({
    name : {
        type : String,
    },
    description : {
        type : String,
    },
    industry : {
        type : String,
    },
    CompanySize :{
        type : Number,
        default : 1 ,
    },

    owner : {
        type : Schema.Types.ObjectId,
        ref : 'BusinessOwner'
    },
    workers : [{
        type : Schema.Types.ObjectId,
        ref : 'Worker'
    }],
    projects : [{
            type : Schema.Types.ObjectId,
            ref : 'Project'
    }],
    collaborations : [{
        type : Schema.Types.ObjectId,
        ref : 'Collaboration'
    }],
   
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Worker',
    },
    workers: [{
        type: Schema.Types.ObjectId,
        ref: 'Worker',
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project',
    }],
    collaborations: [{
        type: Schema.Types.ObjectId,
        ref: 'Collaboration',
    }],
    contactInformation: {
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
        },

    },
    foundingDate: {
        type: Date,
    },
    businessType: {
        type: String,
        // enum: ['Sole Proprietorship', 'Partnership', 'Corporation', 'Limited Liability Company', 'Nonprofit', 'Other'],
    },
    registrationNumber: {
        type: String,
    },
    socialMediaLinks: {
        facebook: {
            type: String,
            trim: true,
        },
        twitter: {
            type: String,
            trim: true,
        },
        linkedin: {
            type: String,
            trim: true,
        },
        instagram: {
            type: String,
            trim: true,
        },
    },
    logoUrl: {
        type: String,
        trim: true,
    },
    foundedBy: {
        type: String,
    },
    missionStatement: {
        type: String,
    },
    values: {
        type: String,
    },
    awardsAndRecognition: [{
        title: {
            type: String,
        },
        year: {
            type: Number,
        },
    }],
    certifications: [{
        name: {
            type: String,
        },
        issuingAuthority: {
            type: String,
        },
        expirationDate: {
            type: Date,
        },
    }],

    


})

module.exports = model('Business', businessSchema);