@extends('layouts.app')
@section('css')
    <style>
        :root::-webkit-scrollbar {
            display: none;
        }

        main {
            width: 100%;
            height: 90vh;
            background-image: url(../backend_pic/dashboard.jfif);
            background-size: contain;
            background-attachment: fixed;
            padding-top: 10px;
            overflow-y: scroll;
            color: white
        }

        main::-webkit-scrollbar {
            display: none;
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

        .edit-btn {
            color: white;
            background-color: grey;
            display: inline-block;
            margin: 5px;
        }

        .delete-btn {
            color: white;
            background-color: grey;
            display: inline-block;
            margin: 5px;
        }
    </style>
@endsection

@section('main')
    <table style="border:1px solid black;">
        <thead>
            <tr>
                <th>編號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>信箱</th>
                <th>意見</th>
                <th>刪改</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($reservation as $key => $item)
                <tr>
                    <td>{{ $key + 1 }}</td>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->phone }}</td>
                    <td>{{ $item->email }}</td>
                    <td>{{ $item->message }}</td>
                    <td>
                        <a href="/admin/reservation/edit/{{ $item->id }}"
                            class="edit-btn font-bold py-1 px-2 border rounded">✒</a>
                        <a href="/admin/reservation/delete/{{ $item->id }}"
                            class="delete-btn font-bold py-1 px-2 border rounded">☠</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
