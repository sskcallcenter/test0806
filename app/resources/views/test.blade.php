@extends('layouts.app')

@section('content')
    <example-component></example-component>
    <example2-component
        :data="{{ json_encode([
    'header' => 'This is header',
    'body' => 'This is body.',
]) }}">
    </example2-component>
@endsection
