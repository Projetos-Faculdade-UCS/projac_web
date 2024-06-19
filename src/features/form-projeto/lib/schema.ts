"use client"
import i18next from 'i18next';
import { z } from "zod";
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/pt/zod.json';
 

/** 
 * definindo a linguagem da engine de validação dos formulários
 * */ 
i18next.init({
    lng: "pt",
    resources: {
        pt: { zod: translation },
    },
});
z.setErrorMap(zodI18nMap);


export const projetoSchema = z.object({
    titulo: z.string().min(15).max(255),
    // objetivo: z.string().min(1).max(400),
    descricao: z.string(),
    valorSolicitado: z.number().min(0).refine((value) => {
        return value.toString().length < 11
    }
    , {
        message: "O valor solicitado deve ser menor que 11 dígitos"
    }),
    dataConclusao: z.date().nullable(),
    // area: z.number().int().positive(),
    // producoesAcademicas: z.array(z.object({
    //     titulo: z.string().min(1).max(255),
    //     descicao: z.string().max(400),
    //     tipo: z.string().max(255),
    // })),
    // valoresArrecadados: z.array(z.object({
    //     valor: z.number().min(0).max(11),
    //     descricao: z.string().min(1).max(400),
    //     data: z.string(),
    // })),
})

export type ProjetoSchema = z.infer<typeof projetoSchema>