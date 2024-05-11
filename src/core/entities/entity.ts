import { UniqueEntityID } from "./unique-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    Object.assign(this, { props, _id: new UniqueEntityID() })
  }
}