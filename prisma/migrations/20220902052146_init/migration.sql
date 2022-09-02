-- CreateEnum
CREATE TYPE "State" AS ENUM ('E', 'D', 'A');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('A', 'I');

-- CreateTable
CREATE TABLE "Organization" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING(50) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tribe" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "organizationId" INT8 NOT NULL,
    "name" STRING(50) NOT NULL,
    "status" BOOL NOT NULL,

    CONSTRAINT "Tribe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repository" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "tribeId" INT8 NOT NULL,
    "name" STRING(50) NOT NULL,
    "state" "State" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metric" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "repositoryId" INT8 NOT NULL,
    "coverange" FLOAT8 NOT NULL,
    "bugs" INT4 NOT NULL,
    "vulnerabilities" INT4 NOT NULL,
    "hotspots" INT4 NOT NULL,
    "codeSmells" INT4 NOT NULL,

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Metric_repositoryId_key" ON "Metric"("repositoryId");

-- AddForeignKey
ALTER TABLE "Tribe" ADD CONSTRAINT "Tribe_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_tribeId_fkey" FOREIGN KEY ("tribeId") REFERENCES "Tribe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
