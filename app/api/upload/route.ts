import { NextRequest, NextResponse } from "next/server";
import { ReadStream } from "fs";
import blobToIt from "blob-to-it";

export async function POST(postReq: NextRequest) {
  const formData = await postReq.formData();
  const audioFile: File = formData.get("audioStream") as File;
  const songName = formData.get("songName") as string;
  const readableStream = ReadStream.from(blobToIt(audioFile as Blob));

  return NextResponse.json({});
}
