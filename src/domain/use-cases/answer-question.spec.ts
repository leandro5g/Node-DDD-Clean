import { AnswerQuestionUseCase } from "./answer-question"
import { AnswersRepository } from "../repositories/answers-repository"
import { Answer } from "../entities/answer"

const fakeAnswerRepository: AnswersRepository = {
  create: async (asnwer: Answer) => {
  }
}

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    content: "New Answer",
    instructorId: "1",
    questionId: "1"
  })

  expect(answer.content).toEqual("New Answer")
})