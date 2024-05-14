import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionRepository implements QuestionsRepository {
  public items: Question[] = []
  
  public async create(question: Question): Promise<void> {
    this.items.push(question)
  }

  public async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find(item => item.slug.value === slug)
    
    return question ?? null
  }
}