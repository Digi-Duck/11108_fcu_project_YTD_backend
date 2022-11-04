@extends('layouts.app')
@section('css')
<style>
    table {
        width: 80%;
        text-align: center;
        margin-left: 50%;
        transform: translate(-50%, 0);
    }

    th,
    td {
        border: 1px solid black;
    }

    img{
        width: 200px;
    }

    .create-btn {
        color: white;
        background-color: green;
        display: inline-block;
        margin-block: 30px
    }

    .edit-btn {
        color: white;
        background-color: skyblue;
        display: inline-block;
        margin-block: 30px
    }

    .delete-btn {
        color: white;
        background-color: crimson;
        display: inline-block;
        margin-block: 30px
    }
</style>
@endsection

@section('main')
    <form action="/admin/reservation/update/{{$reservation->id}}" method="POST">
        @csrf
        <table style="border:3px solid black">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>電話</th>
                    <th>信箱</th>
                    <th>意見</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{{ $reservation->name }}</td>
                        <td>{{ $reservation->phone }}</td>
                        <td>{{ $reservation->email }}</td>
                        <td><textarea name="message" id="" cols="30" rows="3">"{{ $reservation->message }}"</textarea>
                        </td>
                        <td>
                            <button type="submit" class="create-btn font-bold py-2 px-4 border rounded">確定修改</button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </form>
@endsection
