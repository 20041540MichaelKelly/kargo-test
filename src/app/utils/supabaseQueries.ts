import { db } from "../db/client";
import { CourseProps } from "../types/interfaces";

export async function getCourseData(): Promise<CourseProps[]> {
    const { data, error } = await db.from("courses").select();
    if (error) {
        throw error;
    }

    const courseData: CourseProps[] = data;

    return courseData;
}