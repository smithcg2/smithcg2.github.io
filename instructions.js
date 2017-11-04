var instructions = {
    a1: "This is the group used for reporting the cost of all machinery and equipment. This includes " + 
    "all warehouse and packaging equipment, as well as manufacturing equipment, production " +
    "lines, hi-tech or low-tech. List the total cost by year of acquisition, including fully " +
    "depreciated assets that are still connected with the business. " +
    "For example, a manufacturer of textiles purchased a knitting machine in October 2004 for " +
    "$10,000. The sales tax was $200, shipping charges were $200, and installation costs " +
    "were $200. The total cost that the manufacturer should report is $10,600, if there were no " +
    "other costs incurred. The $10,600 should be added in group (1) to the current year's " +
    "cost column.",
    a2: "This group is for reporting the costs of all furniture & fixtures and small office machines " +
    "used in the business operation. This includes, but is not limited to, file cabinets, desks, " +
    "chairs, adding machines, curtains, blinds, ceiling fans, window air conditioners, " +
    "telephones, intercom systems, and burglar alarm systems.",
    a3: "This group is for reporting the costs of non-production computers & peripherals. This " +
    "includes, but is not limited to, personal computers, midrange, or mainframes, as well as the " +
    "monitors, printers, scanners, magnetic storage devices, cables, & other peripherals " +
    "associated with those computers. This category also includes software that is capitalized " +
    "and purchased from an unrelated business entity. This does not include high tech " +
    "equipment such as proprietary computerized point of sale equipment or high tech medical " +
    "equipment, or computer controlled equipment, or the high-tech computer components that " +
    "control the equipment. This type of equipment would be included in Group (1) or “other”.",
    a4: "This group includes real estate improvements to leased property contracted for, installed, " +
    "and paid for by the lessee which may remain with the real estate, thereby becoming an " +
    "integral part of the leased fee real estate upon expiration or termination of the current " +
    "lease, but which are the property of the current lessee who installed it. (Examples are " +
    "lavatories installed by lessee in a barbershop, special lighting, or dropped ceiling.) If you " +
    "have no leasehold improvements write none. Contact the appropriate county to " +
    "determine if you question if leasehold improvements have already been appraised as real " +
    "property. ",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    b1: "Motor Vehicles registered with the NC Department of Motor Vehicles as of January 1 " +
    "do not have to be listed. Please answer the questions on the form to determine if " +
    "you should complete and attach separate schedules B-1 for certain other vehicles, " +
    "B-2 for Watercraft or Watercraft engines, B-3 for Mobile Homes or Mobile Offices, or " +
    "B-4 for Aircraft.",
    b2: "Motor Vehicles registered with the NC Department of Motor Vehicles as of January 1 " +
    "do not have to be listed. Please answer the questions on the form to determine if " +
    "you should complete and attach separate schedules B-1 for certain other vehicles, " +
    "B-2 for Watercraft or Watercraft engines, B-3 for Mobile Homes or Mobile Offices, or " +
    "B-4 for Aircraft.",
    b3: "Motor Vehicles registered with the NC Department of Motor Vehicles as of January 1 " +
    "do not have to be listed. Please answer the questions on the form to determine if " +
    "you should complete and attach separate schedules B-1 for certain other vehicles, " +
    "B-2 for Watercraft or Watercraft engines, B-3 for Mobile Homes or Mobile Offices, or " +
    "B-4 for Aircraft.",
    b4: "Motor Vehicles registered with the NC Department of Motor Vehicles as of January 1 " +
    "do not have to be listed. Please answer the questions on the form to determine if " +
    "you should complete and attach separate schedules B-1 for certain other vehicles, " +
    "B-2 for Watercraft or Watercraft engines, B-3 for Mobile Homes or Mobile Offices, or " +
    "B-4 for Aircraft.",
    c1: "If on January 1, you have in your possession any business machines, machinery, furniture, " +
    "vending equipment, game machines, postage meters, or any other equipment which is " +
    "loaned, leased, or otherwise held and not owned by you, a complete description and " +
    "ownership of the property should be reported in this section. This information is for office " +
    "use only. Assessments will be made to the owner/lessor. If you have already filed the " +
    "January 15th report required by §105-315, so indicate. If you have none, write none in " +
    "this section. If property is held by a lessee under a “capital lease” where there is a " +
    "conditional sales contract, or if title to the property will transfer at the end of the lease due " +
    "to a nominal “purchase upon termination” fee, then the lessee is responsible for listing " +
    "under the appropriate group. ",
    d1: "If the form is not signed by an authorized person,it will be rejected and could be subject to " +
    "penalties. This section describes who may sign the listing form.\n" +
    "Listings submitted by mail shall be deemed to be filed as of the date shown on the " +
    "postmark affixed by the U.S. Postal Service. Any other indication of the date mailed (such " +
    "as your own postage meter) is not considered and the listing shall be deemed to be filed " +
    "when received in the office of the tax assessor.\n" +
    "Any person who willfully attempts, or who willfully aids or abets any person to attempt, in " +
    "any manner to evade or defeat the taxes imposed under this Subchapter (of the Revenue " +
    "Laws), whether by removal or concealment of property or otherwise, shall be guilty of a " +
    "Class 2 misdemeanor. (Punishable by imprisonment up to 60 days) ",
}

var section = {
    a1: "Schedule A: Group (1)\nMACHINERY & EQUIPMENT",
    a2: "Schedule A: Group (2)\nOFFICE FURNITURE AND FIXTURES",
    a3: "Schedule A: Group (3)\nCOMPUTER EQUIPMENT",
    a4: "Schedule A: Group (4)\nLEASEHOLD IMPROVEMENTS",
    a5: "Schedule A: Group (5)\nRENTAL EQUIPMENT",
    a6: "Schedule A: Group (6)\nHEAVY EQUIPMENT",
    a7: "Schedule A: Group (7)\nOTHER EQUIPMENT AND FARM EQUIPMENT",
    a8: "Schedule A: Group (8)\nSIGNS AND BILLBOARDS",
    a9: "Schedule A: Group (9)\nMISC",
    b1: "Schedule B: Group (1)\nUNREGISTERED MOTOR VEHICLES AND MULTIYEAR TAGGED TRAILERS",
    b2: "Schedule B: Group (2)\nSPECIAL BODIES AND EQUIPMENT ATTACHMENTS TO REGISTERED MOTOR VEHICLES",
    b3: "Schedule B: Group (3)\nAIRCRAFT",
    b4: "Schedule B: Group (4)\nSUPPLIES",
    c1: "Schedule C:\nPROPERTY IN YOUR POSSESSION, BUT OWNED BY OTHERS",
    d1: "Affirmation"
}

function setHeaderAndInstructions() {
    switch(pageid) {
        case 1:
        instruction = instructions.a1;
        header = section.a1;
        break;
        case 2:
        instruction = instructions.a2;
        header = section.a2;
        break;
        case 3:
        instruction = instructions.a3;
        header = section.a3;
        break;
        case 4:
        instruction = instructions.a4;
        header = section.a4;
        break;
        case 5:
        instruction = instructions.a5;
        header = section.a5;
        break;
        case 6:
        instruction = instructions.a6;
        header = section.a6;
        break;
        case 7:
        instruction = instructions.a7;
        header = section.a7;
        break;
        case 8:
        instruction = instructions.a8;
        header = section.a8;
        break;
        case 9:
        instruction = instructions.a9;
        header = section.a9;
        break;
        case 10:
        instruction = instructions.b1;
        header = section.b1;
        break;
        case 11:
        instruction = instructions.b2;
        header = section.b2;
        break;
        case 12:
        instruction = instructions.b3;
        header = section.b3;
        break;
        case 13:
        instruction = instructions.b4;
        header = section.b4;
        break;
        case 14:
        instruction = instructions.c1;
        header = section.c1;
        break;
        case 15:
        instruction = instructions.d1;
        header = section.d1;
        break;       
    }
}


