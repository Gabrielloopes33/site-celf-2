import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const cargo = formData.get('cargo') as string;
    const mensagem = formData.get('mensagem') as string;
    const curriculo = formData.get('curriculo') as File;

    // Aqui você pode:
    // 1. Salvar o arquivo em um storage (AWS S3, Cloudinary, etc)
    // 2. Enviar email com os dados
    // 3. Salvar no banco de dados
    // 4. Integrar com sistema de RH

    console.log('Dados recebidos:', { nome, email, telefone, cargo, mensagem });
    console.log('Arquivo:', curriculo.name, curriculo.size);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}