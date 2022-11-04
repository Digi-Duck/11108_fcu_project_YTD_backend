<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Blog;


class FrontController extends Controller
{
    public function index(){
        $reservation = Reservation::get();
        return view('frontend.index', compact('reservation'));
    }

    public function portfolio(){
        return view('frontend.portfolio');
    }

    public function reservation(){
        return view('frontend.reservation');
    }

    public function aboutus(){
        return view('frontend.aboutus');
    }

    public function blog(){
        $blog = Blog::get();
        return view('frontend.blog', compact('blog'));
    }

    public function store(Request $request){

        Reservation::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        return redirect('/');
    }
}
