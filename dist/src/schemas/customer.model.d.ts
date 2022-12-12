/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
interface ICustomer {
    name: string;
    code: number;
    email: string;
    phoneNumber: string;
}
declare const Customer: import("mongoose").Model<ICustomer, {}, {}, {}>;
export { Customer };
