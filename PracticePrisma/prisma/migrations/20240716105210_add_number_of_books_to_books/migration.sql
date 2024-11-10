/*
  Warnings:

  - Added the required column `number_of_books` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "number_of_books" INTEGER NOT NULL;
