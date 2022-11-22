import { createRouter } from "./context";
import { z } from "zod";

export const roomsRouter = createRouter()
  .mutation("createRoom", {
    input: z.object({
        question: z.string(),
        
    }),
    async resolve({ ctx, input }) {
       
        return await ctx.prisma.room.create(
         {data: {
            ...input
        }}
        );
        }
  }).query("getRoomById", {
    input: z.object({
        id: z.string(),
    }),
    async resolve({ ctx, input }) {
        return await ctx.prisma.room.findUnique({
            where: {
                id: input.id,
            },
        });
    }

  }).mutation("createMember", {
    input: z.object({
        name: z.string().min(5).max(400),
        roomId: z.string(),
    }),
    async resolve({ ctx, input }) {
       
        return await ctx.prisma.member.create({
            data:{
               name: input.name,
               roomId: input.roomId,
               
            }
        })
    }
  })
  