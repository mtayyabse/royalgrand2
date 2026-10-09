
export function middleware(request) {
  return new Response(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Website Temporarily Unavailable</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f8fafc;
            color: #1e293b;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          main { padding: 24px; max-width: 500px; }
          p { color: #64748b; line-height: 1.7; }
        </style>
      </head>
      <body>
        <main>
          <h1>Website Unavailable</h1>
          <p>Business has been closed</p>
          <p>Thank you for your patience.</p>
        </main>
      </body>
    </html>`,
    {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Retry-After": "3600",
      },
    }
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
