import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";

export class InMemoryAnswerRepository implements AnswersRepository {
  public items: Answer[] = []
  
  public async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }
}