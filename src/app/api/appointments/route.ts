import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, customerPhone, customerEmail, vehicleInfo, serviceType, preferredDate, notes } = body;

    // Validate required fields
    if (!customerName || !customerPhone || !vehicleInfo || !serviceType || !preferredDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create appointment
    const appointment = await db.appointment.create({
      data: {
        customerName,
        customerPhone,
        customerEmail,
        vehicleInfo,
        serviceType,
        preferredDate: new Date(preferredDate),
        notes,
        status: 'pending'
      }
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await db.appointment.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}