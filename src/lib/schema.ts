import * as z from 'zod';

export const otpSchema = z.object({
    phone: z.string().min(10, "Invalid number"),
    countryCode: z.string().min(1, "Country code is required"),
});