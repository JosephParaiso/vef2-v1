import fs from "node:fs/promises";
import { parseLine, parseCatAndQual } from "./lib/parse.js";
import {
  generateIndexHtml,
  generateQuestionCategoryHtml,
  generateQuestionHtml,
} from "./lib/html.js";
import { parse } from "node:path";

const MAX_QUESTIONS_PER_CATEGORY = 100;

async function main() {
  // Búa til dist möppu ef ekki til
  const distPath = "./dist";
  await fs.mkdir(distPath);

  const content = await fs.readFile("./questions.csv", "utf-8");

  const lines = content.split("\n");

  const questions = lines.map(parseLine);

  const genQ1Questions = parseCatAndQual(
    questions,
    "1",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const genQ2Questions = parseCatAndQual(
    questions,
    "1",
    "2",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const genQ3Questions = parseCatAndQual(
    questions,
    "1",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const natSciQ1Questions = parseCatAndQual(
    questions,
    "2",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const natSciQ2Questions = parseCatAndQual(
    questions,
    "2",
    "2",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const natSciQ3Questions = parseCatAndQual(
    questions,
    "2",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const litArtQ1Questions = parseCatAndQual(
    questions,
    "3",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const litArtQ2Questions = parseCatAndQual(
    questions,
    "3",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const litArtQ3Questions = parseCatAndQual(
    questions,
    "3",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const histQ1Questions = parseCatAndQual(
    questions,
    "4",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const histQ2Questions = parseCatAndQual(
    questions,
    "4",
    "2",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const histQ3Questions = parseCatAndQual(
    questions,
    "4",
    "3",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const geoQ1Questions = parseCatAndQual(
    questions,
    "5",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const geoQ2Questions = parseCatAndQual(
    questions,
    "5",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const geoQ3Questions = parseCatAndQual(
    questions,
    "5",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const entQ1Questions = parseCatAndQual(
    questions,
    "6",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const entQ2Questions = parseCatAndQual(
    questions,
    "6",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const entQ3Questions = parseCatAndQual(
    questions,
    "6",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  const sportsQ1Questions = parseCatAndQual(
    questions,
    "7",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const sportsQ2Questions = parseCatAndQual(
    questions,
    "7",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );
  const sportsQ3Questions = parseCatAndQual(
    questions,
    "7",
    "1",
    MAX_QUESTIONS_PER_CATEGORY,
  );

  // TODO búa til alla hina flokkana

  const genQ1QuestionsHtml = genQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const genQ2QuestionsHtml = genQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const genQ3QuestionsHtml = genQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const natSciQ1QuestionsHtml = natSciQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const natSciQ2QuestionsHtml = natSciQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const natSciQ3QuestionsHtml = natSciQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const litArtQ1QuestionsHtml = litArtQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const litArtQ2QuestionsHtml = litArtQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const litArtQ3QuestionsHtml = litArtQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const histQ1QuestionsHtml = histQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const histQ2QuestionsHtml = histQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const histQ3QuestionsHtml = histQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const geoQ1QuestionsHtml = geoQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const geoQ2QuestionsHtml = geoQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const geoQ3QuestionsHtml = geoQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const entQ1QuestionsHtml = entQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const entQ2QuestionsHtml = entQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const entQ3QuestionsHtml = entQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  const sportsQ1QuestionsHtml = sportsQ1Questions
    .map(generateQuestionHtml)
    .join("\n");
  const sportsQ2QuestionsHtml = sportsQ2Questions
    .map(generateQuestionHtml)
    .join("\n");
  const sportsQ3QuestionsHtml = sportsQ3Questions
    .map(generateQuestionHtml)
    .join("\n");

  // TODO ítra gegnum alla flokka og búa til

  //ALMENNT
  const genQ1Output = generateQuestionCategoryHtml(
    "Almennt",
    genQ1QuestionsHtml,
  );
  const genQ1Path = "./dist/almenntQ1.html";
  await fs.writeFile(genQ1Path, genQ1Output, "utf-8");

  const genQ2Output = generateQuestionCategoryHtml(
    "Almennt",
    genQ2QuestionsHtml,
  );
  const genQ2Path = "./dist/almenntQ2.html";
  await fs.writeFile(genQ2Path, genQ2Output, "utf-8");

  const genQ3Output = generateQuestionCategoryHtml(
    "Almennt",
    genQ3QuestionsHtml,
  );
  const genQ3Path = "./dist/almenntQ3.html";
  await fs.writeFile(genQ3Path, genQ3Output, "utf-8");

  //NÁTTURU OG VÍSINDI
  const natSciQ1Output = generateQuestionCategoryHtml(
    "Náttúru og vísindi",
    natSciQ1QuestionsHtml,
  );
  const natSciQ1Path = "./dist/visindiQ1.html";
  await fs.writeFile(natSciQ1Path, natSciQ1Output, "utf-8");

  const natSciQ2Output = generateQuestionCategoryHtml(
    "Náttúru og vísindi",
    natSciQ2QuestionsHtml,
  );
  const natSciQ2Path = "./dist/visindiQ2.html";
  await fs.writeFile(natSciQ2Path, natSciQ2Output, "utf-8");

  const natSciQ3Output = generateQuestionCategoryHtml(
    "Náttúru og vísindi",
    natSciQ3QuestionsHtml,
  );
  const natSciQ3Path = "./dist/visindiQ3.html";
  await fs.writeFile(natSciQ3Path, natSciQ3Output, "utf-8");

  //BÓKMENNTIR OG LISTIR

  const litArtQ1Output = generateQuestionCategoryHtml(
    "Bókmenntir og listir",
    litArtQ1QuestionsHtml,
  );
  const litArtQ1Path = "./dist/bokmenntirQ1.html";
  await fs.writeFile(litArtQ1Path, litArtQ1Output, "utf-8");

  const litArtQ2Output = generateQuestionCategoryHtml(
    "Bókmenntir og listir",
    litArtQ2QuestionsHtml,
  );
  const litArtQ2Path = "./dist/bokmenntirQ2.html";
  await fs.writeFile(litArtQ2Path, litArtQ2Output, "utf-8");

  const litArtQ3Output = generateQuestionCategoryHtml(
    "Bókmenntir og listir",
    litArtQ3QuestionsHtml,
  );
  const litArtQ3Path = "./dist/bokmenntirQ3.html";
  await fs.writeFile(litArtQ3Path, litArtQ3Output, "utf-8");

  //SAGA
  const histQ1Output = generateQuestionCategoryHtml(
    "Saga",
    histQ1QuestionsHtml,
  );
  const histQ1Path = "./dist/sagaQ1.html";
  await fs.writeFile(histQ1Path, histQ1Output, "utf-8");

  const histQ2Output = generateQuestionCategoryHtml(
    "Saga",
    histQ2QuestionsHtml,
  );
  const histQ2Path = "./dist/sagaQ2.html";
  await fs.writeFile(histQ2Path, histQ2Output, "utf-8");

  const histQ3Output = generateQuestionCategoryHtml(
    "Saga",
    histQ3QuestionsHtml,
  );
  const histQ3Path = "./dist/sagaQ3.html";
  await fs.writeFile(histQ3Path, histQ3Output, "utf-8");

  //Landafræði
  const geoQ1Output = generateQuestionCategoryHtml(
    "Landafræði",
    geoQ1QuestionsHtml,
  );
  const geoQ1Path = "./dist/landafraediQ1.html";
  await fs.writeFile(geoQ1Path, geoQ1Output, "utf-8");

  const geoQ2Output = generateQuestionCategoryHtml(
    "Landafræði",
    geoQ2QuestionsHtml,
  );
  const geoQ2Path = "./dist/landafraediQ2.html";
  await fs.writeFile(geoQ2Path, geoQ2Output, "utf-8");

  const geoQ3Output = generateQuestionCategoryHtml(
    "Landafræði",
    geoQ3QuestionsHtml,
  );
  const geoQ3Path = "./dist/landafraediQ3.html";
  await fs.writeFile(geoQ3Path, geoQ3Output, "utf-8");

  //SKEMMTUN OG AFRÞEYING
  const entQ1Output = generateQuestionCategoryHtml(
    "Skemmtun og afrþeying",
    entQ1QuestionsHtml,
  );
  const entQ1Path = "./dist/skemmtunQ1.html";
  await fs.writeFile(entQ1Path, entQ1Output, "utf-8");

  const entQ2Output = generateQuestionCategoryHtml(
    "Skemmtun og afrþeying",
    entQ2QuestionsHtml,
  );
  const entQ2Path = "./dist/skemmtunQ2.html";
  await fs.writeFile(entQ2Path, entQ2Output, "utf-8");

  const entQ3Output = generateQuestionCategoryHtml(
    "Skemmtun og afrþeying",
    entQ3QuestionsHtml,
  );
  const entQ3Path = "./dist/skemmtunQ3.html";
  await fs.writeFile(entQ3Path, entQ3Output, "utf-8");

  //ÍÞRÓTTIR
  const sportsQ1Output = generateQuestionCategoryHtml(
    "Íþróttir og tómstundir",
    sportsQ1QuestionsHtml,
  );
  const sportsQ1Path = "./dist/itrottirQ1.html";
  await fs.writeFile(sportsQ1Path, sportsQ1Output, "utf-8");

  const sportsQ2Output = generateQuestionCategoryHtml(
    "Íþróttir og tómstundir",
    sportsQ2QuestionsHtml,
  );
  const sportsQ2Path = "./dist/itrottirQ2.html";
  await fs.writeFile(sportsQ2Path, sportsQ2Output, "utf-8");

  const sportsQ3Output = generateQuestionCategoryHtml(
    "Íþróttir og tómstundir",
    sportsQ3QuestionsHtml,
  );
  const sportsQ3Path = "./dist/itrottirQ3.html";
  await fs.writeFile(sportsQ3Path, sportsQ3Output, "utf-8");

  // TODO búa til index
  const indexHtml = generateIndexHtml();

  await fs.writeFile("./dist/index.html", indexHtml, "utf-8");
}

main().catch((error) => {
  console.error("error generating", error);
});
