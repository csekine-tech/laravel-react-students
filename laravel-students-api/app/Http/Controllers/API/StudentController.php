<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();
        return response()->json([
            'status' => 200,
            'students' => $students
        ]);
    }

    public function edit($id){
        $student = Student::find($id);
        return response()->json([
            'status' => 200,
            'student' =>$student
        ]);
    }

    public function update($id,Request $request){
        $student = Student::find($id);
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();
        return response()->json([
            'status' => 200,
            'message' => 'student updated successfully!'
        ]);
    }

    public function store(Request $request){
        $student = new Student;
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'student added successfully!'
        ]);
    }

    public function delete($id){
        Student::find($id)->delete();
        return response()->json([
            'status' => 200,
            'message' => 'student removed successfully!'
        ]);
    }
}
