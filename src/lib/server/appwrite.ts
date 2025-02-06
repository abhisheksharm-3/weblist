"use server";
import { cookies } from "next/headers";
import { Client, Account, Databases } from "node-appwrite";
import { ResourceType } from "../types";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!);
  const weblistCookies = await cookies();
  const session = weblistCookies.get("weblist-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
  };
}
export async function submitFormData(formData: ResourceType) {
  try {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT!)
      .setProject(process.env.APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);
    const databases = new Databases(client);
    const { id, ...dataWithoutId } = formData;
    const response = await databases.createDocument(
      process.env.RESOURCES_DATABASE_ID!,
      process.env.RESOURCES_COLLECTION_ID!,
      id,
      dataWithoutId
    );
    return response;
  } catch (error) {
    throw error;
  }
}
