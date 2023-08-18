import { NextRequest, NextResponse } from "next/server";

import { lineItems } from "@/app/data.json";

export async function GET(_: NextRequest) {
  let json_response = lineItems
  
  return NextResponse.json(json_response);
  
}