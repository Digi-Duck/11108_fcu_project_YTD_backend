<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{

    public function reservation(){
        $reservation = Reservation::get();
        $header = '留言區管理';
        $slot = '';
        return view('backend.reservation.backend_reservation', compact('reservation','slot','header'));
    }

    public function edit($id){
        $reservation = Reservation::find($id);
        $header = '編輯留言';
        $slot = '';
        return view('backend.reservation.edit', compact('reservation','slot','header'));
    }

    public function update(Request $request,$id){
        $reservation = Reservation::find($id);
        // $reservation->name = $request->name;
        // $reservation->phone = $request->phone;
        // $reservation->email = $request->email;
        $reservation->message = $request->message;
        $reservation->save();

        return redirect('/admin/reservation');
    }

    public function delete($id){
        Reservation::find($id)->delete();
        return redirect('/admin/reservation');
    }
}
