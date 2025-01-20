import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres.rdcjkauzylketmjhgbuu:13876541@aws-0-eu-central-1.pooler.supabase.com:5432/postgres?pgbouncer=true"
                }
            }
        })
    }
}
