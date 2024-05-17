import { NextResponse } from 'next/server'
 
export async function GET(req) {
    return NextResponse.json({
      status: true,
      message: 'success',
      data: req
    }, { status: 200 })
  }