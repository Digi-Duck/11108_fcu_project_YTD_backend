@extends('layouts.app')
@section('css')
    <style>
        :root::-webkit-scrollbar {
            display: none;
        }

        main {
            width: 100%;
            height: 90vh;
            background: radial-gradient(gray,black);
            padding-top: 50px;
            color: white;
        }

        table {
            width: 60%;
            text-align: center;
            margin: auto;
            background-color: #fff;
        }

        thead,tbody{
            background-color: #000000dd;
        }

        th,
        td {
            border: 1px solid white;
        }

        img {
            width: 200px;
        }

        textarea{
            background-color: #00000066;
            color: white;
        }

        .create-btn {
            color: white;
            background-color: #06c4c4;
            display: inline-block;
            margin-block: 30px
        }

    </style>
@endsection

@section('main')
    <form action="/admin/reservation/update/{{ $reservation->id }}" method="POST">
        @csrf
        <table style="border:2px solid white">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>電話</th>
                    <th>信箱</th>
                    <th>意見</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $reservation->name }}</td>
                    <td>{{ $reservation->phone }}</td>
                    <td>{{ $reservation->email }}</td>
                    <td>
                        <textarea name="message" id="" cols="30" rows="3">"{{ $reservation->message }}"</textarea>
                    </td>
                    <td>
                        <button type="submit" class="create-btn font-bold py-2 px-4 border rounded">儲存</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
@endsection
