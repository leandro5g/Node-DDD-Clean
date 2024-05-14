import { AnswerQuestionUseCase } from "./answer-question"
import { AnswersRepository } from "../repositories/answers-repository"
import { InMemoryAnswerRepository } from "test/repositories/in-memory-answers-repository"

let inMemoryAnswerRepository: AnswersRepository 
let sut: AnswerQuestionUseCase

describe("Create new Answer", () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it("should be able to create an new answer question", async () => {
  
    const answer = await sut.execute({
      content: "New Answer",
      instructorId: "1",
      questionId: "1"
    })
  
    expect(answer.content).toEqual("New Answer")
  })
})