import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json({
    status: true,
    message: 'success',
    data: []
  }, { status: 200 })
}