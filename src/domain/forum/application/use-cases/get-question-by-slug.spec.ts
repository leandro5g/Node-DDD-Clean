import { GetQuestionBySlugUseCase } from "./get-question-by-slug"
import { InMemoryQuestionRepository } from "test/repositories/in-memory-question-repository";
import { makeQuestion } from "test/factories/make-question";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: GetQuestionBySlugUseCase

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })

  it("should be able to get one question by slug", async () => {
    const newQuestion = makeQuestion()

    inMemoryQuestionRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: "example-test"
    })
  
    expect(question?.id).toBeTruthy()
  })
})