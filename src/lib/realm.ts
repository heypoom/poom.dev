import Realm, { type ObjectSchema } from "realm";

class Note extends Realm.Object<Note> {
  _id!: number

  name!: string
  path!: string
  slug!: string
  source!: string
  size!: number
  links!: string[]
  images!: string[]
  tags!: string[]
  metadata!: Record<string, any>

  static schema: ObjectSchema = {
    name: "notes",
    primaryKey: "_id",
    properties: {
      _id: "int",
      name: "string",
      path: "string",
      slug: "string",
      source: "string",
      size: "int",
      links: "string[]",
      images: "string[]",
      tags: "string[]",
      metadata: "object",
    },
  };
}

export async function getRealm() {
  return Realm.open({schema: [Note]})
}
