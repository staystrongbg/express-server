/*
  Warnings:

  - Made the column `description` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `books` MODIFY `description` TEXT NOT NULL;
