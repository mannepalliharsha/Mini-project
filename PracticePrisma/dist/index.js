"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function Books(_a) {
    return __awaiter(this, arguments, void 0, function* ({ name, date, Author, }) {
        const insertdata = yield prisma.books.create({
            data: {
                name,
                date,
                Author
            }
        });
        console.log(insertdata);
    });
}
Books({ name: "maths", date: "18-10-0=2003", Author: "srinivasramunjan" });
function search(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.books.findFirst({
            where: {
                id: id
            }
        });
        console.log(data);
    });
}
function update(id, Author) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedone = yield prisma.books.update({
            where: {
                id: id
            },
            data: {
                Author: Author
            }
        });
        console.log(updatedone);
    });
}
// search(1);
function Delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.books.delete({
            where: {
                id: id
            }
        });
        console.log(data);
    });
}
// update(1,"harsha");
// Delete(1);
