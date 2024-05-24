-- CreateEnum
CREATE TYPE "Emotion" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "Species" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "scientific_name" TEXT,
    "name" TEXT NOT NULL,
    "habitat" TEXT,
    "find_it" TEXT,
    "description" TEXT,
    "behavior" TEXT,
    "life_cycle" TEXT,
    "diet" TEXT,
    "photo_url" TEXT NOT NULL,
    "status" TEXT,
    "add_information" TEXT,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo_url" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discovery" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo_url" TEXT,
    "weather" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "information" TEXT,
    "created_at" TIMESTAMPTZ,
    "id_user" INTEGER NOT NULL,
    "id_species" INTEGER NOT NULL,

    CONSTRAINT "Discovery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "photo_url" TEXT,
    "number_participant" INTEGER,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "photo_url" TEXT,
    "created_at" TIMESTAMPTZ,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ,
    "id_article" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "type" "Emotion" NOT NULL,
    "id_article" INTEGER NOT NULL,
    "id_comment" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "name" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    "title" TEXT NOT NULL,
    "photo_url" TEXT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "explanation" TEXT,
    "number_question" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ,
    "id_user" INTEGER NOT NULL,
    "id_level" INTEGER NOT NULL,
    "id_theme" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_pseudo_key" ON "User"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Discovery_id_user_key" ON "Discovery"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Discovery_id_species_key" ON "Discovery"("id_species");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_user_key" ON "Project"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_user_key" ON "Article"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_article_key" ON "Comment"("id_article");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_user_key" ON "Comment"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_article_key" ON "Like"("id_article");

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_comment_key" ON "Like"("id_comment");

-- CreateIndex
CREATE UNIQUE INDEX "Like_id_user_key" ON "Like"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_id_user_key" ON "Quiz"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_id_level_key" ON "Quiz"("id_level");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_id_theme_key" ON "Quiz"("id_theme");

-- AddForeignKey
ALTER TABLE "Discovery" ADD CONSTRAINT "Discovery_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discovery" ADD CONSTRAINT "Discovery_id_species_fkey" FOREIGN KEY ("id_species") REFERENCES "Species"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_id_comment_fkey" FOREIGN KEY ("id_comment") REFERENCES "Comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_id_level_fkey" FOREIGN KEY ("id_level") REFERENCES "Level"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_id_theme_fkey" FOREIGN KEY ("id_theme") REFERENCES "Theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
