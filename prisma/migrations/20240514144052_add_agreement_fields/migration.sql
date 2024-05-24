-- AlterTable
ALTER TABLE "User" ADD COLUMN     "agreedToTerms" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "consentGivenAt" TIMESTAMP(3);
