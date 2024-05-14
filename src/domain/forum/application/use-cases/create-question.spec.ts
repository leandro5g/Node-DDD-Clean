import { CreateQuestionUseCase } from "./create-question"
import { InMemoryQuestionRepository } from "test/repositories/in-memory-question-repository";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: CreateQuestionUseCase

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  it("should be able to create a question", async () => {
  
    const { question } = await sut.execute({
      authorId: "1",
      content: "New Question",
      title: "Content Question"
    })
  
    expect(question.id).toBeTruthy()
    expect(question.title).toBeTruthy()
    expect(question.content).toBeTruthy()
  })
})