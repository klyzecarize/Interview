export async function POST(request) {
    const body = await request.json();
    const { user, time } = body;

    const newBookedSlot = { 
        'name': user,
        'time': time,
        'message': "success"
    };

    return new Response(JSON.stringify(newBookedSlot), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}