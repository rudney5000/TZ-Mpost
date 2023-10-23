/*
  Warnings:

  - Made the column `profit` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `winningRate` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "profit" SET NOT NULL,
ALTER COLUMN "winningRate" SET NOT NULL;
