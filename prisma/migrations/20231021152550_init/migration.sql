-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "profit" INTEGER,
    "winningRate" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
